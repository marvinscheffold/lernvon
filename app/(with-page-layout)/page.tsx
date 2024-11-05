export default function Page() {
  const isDevelop = process.env.NODE_ENV! === "development";
  return (
    <div>
      is develop {isDevelop} NODE_ENV: {process.env.NODE_ENV!}
    </div>
  );
}
