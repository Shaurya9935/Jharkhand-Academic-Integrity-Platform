import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3f7fd] to-[#eaf1fb]">
      {/* Main Section */}
      <section className="flex flex-col items-center justify-center pt-24 pb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
          Ensuring Academic <span className="text-blue-600">Integrity</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-8">
          A comprehensive platform for managing academic integrity processes, document verification, and institutional compliance across Jharkhand&apos;s educational institutions.
        </p>
        <Link href="/login">
          <button className="bg-blue-600 text-white px-8 py-3 rounded font-semibold text-lg shadow hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="flex flex-wrap justify-center gap-6 px-4 pb-12">
        <div className="bg-white rounded-lg shadow p-6 w-72 flex flex-col items-center">
          <span className="material-symbols-outlined text-5xl text-blue-600 mb-2">shield</span>
          <h3 className="font-semibold text-lg mb-1 text-center">Secure Verification</h3>
          <p className="text-gray-500 text-center text-sm">
            Advanced security measures to ensure document authenticity and prevent fraud.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 w-72 flex flex-col items-center">
          <span className="material-symbols-outlined text-5xl text-green-600 mb-2">groups</span>
          <h3 className="font-semibold text-lg mb-1 text-center">Multi-Role Access</h3>
          <p className="text-gray-500 text-center text-sm">
            Dedicated dashboards for students and institutions with role-based permissions.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 w-72 flex flex-col items-center">
          <span className="material-symbols-outlined text-5xl text-yellow-600 mb-2">description</span>
          <h3 className="font-semibold text-lg mb-1 text-center">Document Management</h3>
          <p className="text-gray-500 text-center text-sm">
            Streamlined process for uploading, reviewing, and managing academic documents.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 w-72 flex flex-col items-center">
          <span className="material-symbols-outlined text-5xl text-red-500 mb-2">workspace_premium</span>
          <h3 className="font-semibold text-lg mb-1 text-center">Compliance Tracking</h3>
          <p className="text-gray-500 text-center text-sm">
            Real-time monitoring and reporting of compliance status and integrity metrics.
          </p>
        </div>
      </section>
    </div>
  );
}
