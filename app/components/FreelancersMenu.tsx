import Link from "next/link";

export default function FreelancersMenu() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-14 grid md:grid-cols-3 gap-16">

      {/* Column 1 */}
      <div>
        <h4 className="text-blue-600 font-semibold mb-6">Get paid</h4>
        <MenuItem title="Get paid by clients" desc="Request and receive payments" />
        <MenuItem title="Get paid by marketplaces" desc="Connect to global platforms" />
        <MenuItem title="Withdraw funds" desc="To your local bank account" />
      </div>

      {/* Column 2 */}
      <div>
        <h4 className="text-blue-600 font-semibold mb-6">Manage business</h4>
        <MenuItem title="Capital Advance" desc="Fund your business growth" />
        <MenuItem title="Manage currencies" desc="Transfer between balances" />
        <MenuItem title="Partners Directory" desc="Exclusive offers from partners" />
      </div>

      {/* Column 3 */}
      <div>
        <h4 className="text-gray-400 font-semibold mb-6">Use cases</h4>
        <ul className="space-y-4">
          <li><Link href="#">Get paid by Upwork</Link></li>
          <li><Link href="#">Get paid by Fiverr</Link></li>
          <li><Link href="#">Freelancer payment processing</Link></li>
          <li><Link href="#">Multi-currency account</Link></li>
          <li><Link href="#">Send invoice payments</Link></li>
        </ul>
      </div>

    </div>
  );
}

function MenuItem({ title, desc }: { title: string; desc: string }) {
  return (
    <Link href="#" className="block mb-6">
      <p className="font-medium text-gray-900">{title}</p>
      <p className="text-sm text-gray-500">{desc}</p>
    </Link>
  );
}
