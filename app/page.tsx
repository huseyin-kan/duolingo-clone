import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-20 flex flex-col gap-4 w-[400px]">
      <Button>Click me</Button>
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"primaryOutline"}>Primary Outline</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"secondaryOutline"}>Secondary Outline</Button>
      <Button variant={"danger"}>Danger</Button>
      <Button variant={"dangerOutline"}>Danger Outline</Button>
      <Button variant={"super"}>Super</Button>
      <Button variant={"superOutline"}>Super Outline</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"sidebar"}>Sidebar</Button>
      <Button variant={"sidebarOutline"}>Sidebar Outline</Button>
    </div>
  );
}
