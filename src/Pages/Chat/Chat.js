import ResponsiveAppBar from "../../Components/Navbar/Navbar";
import Editor from "@monaco-editor/react";
import styles from "./Chat.module.css";

const Chat = () => {
  return (
    <div className={styles.chatHome}>
      <ResponsiveAppBar />
      <div className={styles.window}>
        <Editor
          width="100vw"
          defaultLanguage="javascript"
          theme="vs-dark"
          //   onMount={onMount}
          //   onChange={onChange}
          options={{
            fontFamily: 'Consolas, "Courier New", monospace',
            tabSize: 4,
          }}
        />
      </div>
    </div>
  );
};

export default Chat;
