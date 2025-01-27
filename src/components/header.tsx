import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IconMenu, IconX } from "@tabler/icons-react";

export default function Header() {
  return (
    <div className="flex h-20 items-center justify-between px-10">
      <p className="font-title text-4xl text-muted">Andrei Iatan </p>
      <div className="hidden sm:block">
        <div className="flex gap-4">
          {/* <p>Work</p>
          <p>About</p>
          <p>Contact</p> */}
        </div>
      </div>
      <div className="sm:hidden">
        <Drawer direction="right">
          <DrawerTrigger>
            <IconMenu />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Andrei Iatan</DrawerTitle>
              <DrawerDescription />
            </DrawerHeader>
            <ul className="p-4">
              <li className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800">
                Work
              </li>
              <li className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800">
                About
              </li>
              <li className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800">
                Contact
              </li>
            </ul>
            <DrawerFooter>
              <DrawerClose className="flex justify-center">
                <IconX className="cursor-pointer" />
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
