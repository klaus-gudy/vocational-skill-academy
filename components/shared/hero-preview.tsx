import Image from "next/image";

export default function HeroPreview() {
  return (
    <div className="aspect-[4/3] rounded-lg overflow-hidden">
      <Image
        src={`https://cdn.usegalileo.ai/sdxl10/3626b78e-a788-4130-bc1b-3e9e616c939f.png`}
        alt="Property name"
        className="object-cover w-full h-full"
        width={400}
        height={300}
      />
    </div>
  );
}
