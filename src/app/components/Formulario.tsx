import {Input} from "@nextui-org/react";

export default function App() {
  const colors: Array<"default" | "primary" | "secondary" | "success" | "warning" | "danger"> = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

  return (
    <div className="w-full flex flex-row flex-wrap gap-4">
      {colors.map((color) => (
        <Input
          key={color}
          type="email"
          color={color}
          label="Email"
          placeholder="Enter your email"
          defaultValue="junior@nextui.org"
          className="max-w-[220px]"
        />
      ))}
    </div>
  );
}