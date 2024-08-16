import React, { useEffect, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const blockedEmojis = ["1F595", "1F513", "1F4A9"]; // Ejemplo: "🖕", "🔞", "💩"

const Todos = () => {
    const [showEmoji, setShowEmoji] = useState(false);
    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState(
        JSON.parse(localStorage.getItem("todo")) || []
    );
    const [editTodo, setEditTodo] = useState(null);

    // Filtrar emojis bloqueados
    const filterEmojis = (emoji) => {
        return !blockedEmojis.includes(emoji.unified.toUpperCase());
    };

    // Agregar emoji si no está bloqueado
    const addEmoji = (emoji) => {
        if (filterEmojis(emoji)) {
            setText(text + emoji.native);
        } else {
            alert("Este emoji no está permitido.");
        }
    };

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todoList));
    }, [todoList]);

    useEffect(() => {
        if (editTodo) {
            setText(editTodo.text);
        } else {
            setText("");
        }
    }, [editTodo]);

    const addTodo = (e) => {
        e.preventDefault();
        if (!editTodo) {
            const id = Math.random(Math.round() * 10000000);
            const todo = {
                id,
                text,
                time: new Date(),
                completed: false,
            };
            setTodoList([...todoList, todo]);
            setText("");
            setShowEmoji(false);
        } else {
            console.log("Algo está mal");
        }
    };

    return (
        <div className="py-48 w-[90%] sm:w-[70%] md:w-[80%] lg:w-[40%] mx-auto">
            <h1 className="text-2 font-medium text-center capitalize hover:text-green-500">
                Demo integración Emoji-Mart para Cadena S.A
            </h1>
            <div>
                <form onSubmit={addTodo} className="flex items-start gap-2 pt-2rem">
                    <div className="w-full flex items-end p-1 bg-todo rounded-sm relative">
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="w-full bg-transparent outline-none resize-none text-sm"
                            cols="30"
                            rows="1"
                            placeholder="Asunto"
                        ></textarea>
                        {showEmoji && (
                            <div className="absolute top-[100%] right-1 holder">
                                <Picker
                                    data={data}
                                    emojiSize={20}
                                    emojiButtonSize={28}
                                    onEmojiSelect={addEmoji}
                                    emojisToShowFilter={filterEmojis}
                                    maxFrequentRows={0}
                                />
                            </div>
                        )}
                    </div>
                    <span
                        onClick={() => setShowEmoji(!showEmoji)}
                        className="cursor-pointer hover:text-green-600"
                    >
                        <BsEmojiSmile />
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Todos;
