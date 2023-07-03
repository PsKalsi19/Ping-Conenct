import { Popover } from "@headlessui/react";
const PostMenus = ({ menuIcon, elementRender }) => {
  return (
    <Popover className="relative">
      <Popover.Button>{menuIcon}</Popover.Button>

      <Popover.Panel className="absolute z-10">{elementRender}</Popover.Panel>
    </Popover>
  );
};

export default PostMenus;
