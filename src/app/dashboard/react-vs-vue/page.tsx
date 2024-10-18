import SplitLayout from "@/components/splitLayout";

export default function Page() {
  return (
    <SplitLayout
      reactContent={<div>React Content</div>}
      vueContent={<div>Vue Content</div>}
    />
  );
}
