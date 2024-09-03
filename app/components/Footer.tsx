export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} PED Design Tool. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
