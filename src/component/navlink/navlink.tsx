import Link from "next/link";

export function Navlink(props: { linkHref: string; linkContent: string }) {
  return (
    <li>
      <Link href={props.linkHref}>{props.linkContent}</Link>
    </li>
  );
}
