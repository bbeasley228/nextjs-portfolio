import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/">
        <span className="group text-xl font-black leading-none text-base-900">
          <span>Byron Beasley</span>&nbsp;
          <span className="group-hover:text-indigo-500 transition ease-in-out delay-100">
            Portofolio
          </span>
          <span className="text-indigo-600">.</span>
        </span>
      </Link>
    </>
  );
}
