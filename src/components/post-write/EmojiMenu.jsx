import { Popover } from "@headlessui/react";
import EmojiPicker, { SkinTones, Theme } from "emoji-picker-react";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
const EmojiMenu = ({ setPostText, textAreaRef }) => {
  function onClick(emojiData) {
    const textArea = textAreaRef.current;
    const startPos = textArea.selectionStart;
    const endPos = textArea.selectionEnd;
    setPostText((prevVal) => {
      return (
        prevVal.slice(0, startPos) + emojiData.emoji + prevVal.slice(endPos)
      );
    });
  }
  return (
    <Popover className="relative">
      <Popover.Button>
        <FaceSmileIcon className="w-6 h-6 text-gray-500 hover:text-orange-400" />
      </Popover.Button>

      <Popover.Panel className="absolute z-10">
        <EmojiPicker
          onEmojiClick={onClick}
          autoFocusSearch={false}
          theme={Theme.AUTO}
          searchDisabled
          height={350}
          emojiVersion="0.5"
          previewConfig={{
            showPreview: false,
          }}
          skinTonesDisabled
          defaultSkinTone={SkinTones.MEDIUM}
        />
      </Popover.Panel>
    </Popover>
  );
};
export default EmojiMenu;
