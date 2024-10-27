export default function Button(props: any) {
  return (
    <button data-testid="button" {...props} className="rounded border bg-neutral-100 p-2">
      {props.children}
    </button>
  );
}
