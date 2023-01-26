const Spacer = () => <span className="spacer">&nbsp;&nbsp;|&nbsp;&nbsp;</span>

const Footer = () => {
  const version = process.env.APP_VERSION || "0.0.0"
  const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || "dev"

  return (
    <footer className="container mx-auto px-12 flex justify-between text-sm text-sky-700">
      <div>Chewam © 2023</div>

      <div>
        version {version} (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/chewam/deaths/tree/${sha}`}
        >
          {sha.substring(0, 7)}
        </a>
        )
      </div>
    </footer>
  )
}

export default Footer
