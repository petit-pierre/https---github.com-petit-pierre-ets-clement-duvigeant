/* UTILISER TIPTAP ET DOMPURIFY */
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState, useEffect } from "react";
import "./changetext.css";
import { useNavigate } from "react-router-dom";

export default function ChangeText({
  addMessage,
  location,
  placeholder = "",
  id = null,
}) {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  // État pour forcer le re-rendu à chaque transaction de l'éditeur
  const [, setForceUpdate] = useState({});

  const editor = useEditor({
    extensions: [StarterKit],
    content: placeholder,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
    onTransaction: () => {
      // Se déclenche à chaque changement d'état (sélection, frappe, formatage)
      setForceUpdate({});
    },
  });

  useEffect(() => {
    if (editor && placeholder) {
      editor.commands.setContent(placeholder);
    }
  }, [editor, placeholder]);

  const submitContent = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("location", location);
    formData.append("content", content);
    if (id) formData.append("id", id);
    else formData.append("id", "-1");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/content/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        addMessage("Erreur lors de la sauvegarde.");
        throw new Error(data.message || "Upload failed");
      }

      addMessage("Contenu sauvegardé avec succes!");
    } catch (error: any) {
      localStorage.removeItem("token");
      navigate("/login", {
        state: { errorMessage: error.message },
      });
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <form onSubmit={submitContent} className="text-editor">
      <div className="editor">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "active" : ""}
        >
          Gras
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "active" : ""}
        >
          Italique
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={editor.isActive("heading", { level: 2 }) ? "active" : ""}
        >
          Titre 1
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={editor.isActive("heading", { level: 3 }) ? "active" : ""}
        >
          Titre 2
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "active" : ""}
        >
          Liste
        </button>
      </div>

      <EditorContent editor={editor} className="text" />

      <button type="submit">Enregistrer</button>
    </form>
  );
}
