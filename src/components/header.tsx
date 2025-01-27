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

export default function Header() {
  return (
    <div className="flex h-20 items-center justify-between px-10 text-gray-200">
      <p className="font-title text-4xl">Andrei Iatan</p>
      <div className="hidden sm:block">
        <div className="flex gap-4">
          <p>Work</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="sm:hidden">
        <Drawer direction="right">
          <DrawerTrigger>Open</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <button>Submit</button>
              <DrawerClose>
                <button>Cancel</button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
