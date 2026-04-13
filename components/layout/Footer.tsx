import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 mt-8">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400/80">
            © {new Date().getFullYear()} MINT Lab, Korea University. All rights reserved.
          </p>
          <a
            href="https://www.korea.ac.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="https://mintlab.korea.ac.kr/images/logo.png"
              alt="Korea University"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
