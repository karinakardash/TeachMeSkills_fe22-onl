import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { AppPages } from "../../../../types";
import { PrimaryButton } from "../../../../ui/button/primary-button/PrimaryButton";
import { Input } from "../../../../ui/form/inputs/Input";
import { addPost } from "../AddPostSlice";
import styles from "./AddPostForm.module.css";

type AddPostFormProps = {
  children?: React.ReactNode;
};

export const AddPostForm: React.FC<AddPostFormProps> = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const id = useAppSelector((state) => state.addPost.post?.id);
  const [step, setStep] = useState<"initial" | "submitted">("initial");
  const navigate = useNavigate();
  useEffect(() => {
    if (step === "submitted" && id != null) {
      navigate(`${AppPages.POST_PAGE}/${id}`);
    }
  }, [id, step, navigate]);

  const dispatch = useAppDispatch();
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          addPost({
            image: image,
            text: text,
            lesson_num: 0,
            title: title,
          })
        );
        setStep("submitted");
      }}
    >
      <div className={styles.inputBlock}>
        <Input
          className={styles.input}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          label="Title"
        ></Input>
        <Input
          className={styles.input}
          type="text"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          label="URL"
        ></Input>
      </div>
      <div className={styles.inputBlock}>
        <Input
          className={styles.input}
          type="text"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          label="Published at"
        ></Input>
        <Input
          className={styles.input}
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] ?? null)}
          value={""}
          label="Image"
        ></Input>
      </div>
      <div className={styles.TextareaBlock}>
        <p className={styles.label}>Description</p>
        <textarea
          className={styles.textarea}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
      </div>
      <div className={styles.TextareaBlock}>
        <p>Text</p>
        <textarea
          className={styles.textarea}
          onChange={(e) => setText(e.target.value)}
          value={text}
        ></textarea>
      </div>
      <PrimaryButton>Cancel</PrimaryButton>
      <PrimaryButton type="submit">Add Post</PrimaryButton>
    </form>
  );
};
