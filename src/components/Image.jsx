export default function Image({ src, alt, caption, size = "w-96 h-96" }) {
  return (
    <div class="flex justify-center items-center w-full ">
      <img src={src} alt={alt} class={`${size} `} />
      <p class="text-center mt-3 font-handwriting text-gray-600 text-sm">
        {caption}
      </p>
    </div>
  );
}
