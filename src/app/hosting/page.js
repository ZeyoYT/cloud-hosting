"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'
import { useEffect } from 'react'
import AOS from 'aos'

export default function Hosting() {
  useEffect(() => {
    AOS.init({ duration: 900 });
    document.title = "Hosting | Cloud Hosting";
  }, []);

  const hostingPlans = [
    {
      type: "VPS-Mini Hosting",
      description: "Scalable virtual private servers for advanced users",
      plan: {
        name: "Pro VPS",
        price: "750 Rs",
        features: [
          "1 vCPUs",
          "4 GB RAM",
          "30 GB SSD",
          "1 TB Bandwidth",
          "Full Root Access",
          "24/7 Support"
        ]
      },
      isPopular: false
    },
    {
      type: "WordPress Hosting",
      description: "Optimized hosting for WordPress websites",
      plan: {
        name: "WP Plus",
        price: "100 Rs",
        features: [
          "5 Websites",
          "20 GB SSD",
          "Unmetered Bandwidth",
          "Free SSL",
          "1-Click WordPress Install",
          "24/7 Support"
        ]
      },
      isPopular: true
    },
    {
      type: "Shared Hosting",
      description: "Affordable hosting for small websites",
      plan: {
        name: "Advanced Shared",
        price: "250 Rs",
        features: [
          "10 Websites",
          "50 GB Storage",
          "Unmetered Bandwidth",
          "Free SSL",
          "Free Domain (1st year)",
          "24/7 Support"
        ]
      },
      isPopular: false,
      commingSoon: true
    },
    {
      type: "Dedicated Hosting",
      description: "High-performance servers for demanding applications",
      plan: {
        name: "Enterprise Dedicated",
        price: "1500 Rs",
        features: [
          "8 Core CPU",
          "32 GB RAM",
          "1 TB SSD",
          "5 TB Bandwidth",
          "Full Root Access",
          "24/7 Support"
        ]
      },
      isPopular: false,
      commingSoon: true
    },
    {
      type: "Reseller Hosting",
      description: "Start your own hosting business with our reseller plans",
      plan: {
        name: "Reseller Plus",
        price: "20000 Rs",
        features: [
          "Upto 200 Accounts",
          "Upto 2 TB Storage",
          "Unmetered Bandwidth",
          "Free SSL",
          "OpenPanel",
          "24/7 Support"
        ]
      },
      isPopular: false,
      commingSoon: true
    }
  ]

  return (
    <div className="min-h-screen text-foreground">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Choose Your Perfect Hosting Plan</h1>
          <p className="text-xl text-muted-foreground">
            Whether you need VPS, WordPress, or Shared Hosting, we've got you covered.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-4">
          {hostingPlans.map((hostingType) => (
            <Card key={hostingType.type} className="relative flex flex-col bg-gradient-to-tr from-gray-500 to-indigo-400 text-gray-300 last:col-span-2 last:from-slate-800 last:to-slate-400">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-300">{hostingType.type}</CardTitle>
                <CardDescription className="text-gray-300 text-lg">{hostingType.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <span className="text-3xl font-bold">{hostingType.plan.price}</span>
                  <span className="text-gray-900 text-lg"> /Month</span>
                </div>
                <h3 className="font-semibold mb-2">{hostingType.plan.name}</h3>
                <ul className="space-y-2">
                  {hostingType.plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-white" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full rounded bg-slate-300 text-lg ${hostingType.commingSoon ? "bg-slate-400 hover:bg-slate-400/75 text-white" : ""}`}
                  onClick={() => { if (!hostingType.commingSoon) 
                    {
                      localStorage.setItem(
                        "hosting_price",
                        hostingType.plan.price
                      )
                      window.location.href='/payment_gateway?from=hosting&plan=' + hostingType.plan.name; 
                    }
                  }}
                >
                  {hostingType.commingSoon ? "Coming Soon" : "Get Started"}
                </Button>
              </CardFooter>

              {hostingType.isPopular && (
                <div className="absolute top-0 right-0 rounded-bl-full rounded-tl-full bg-red-400 shadow-lg text-black text-lg p-2 mt-4 px-12">
                  Popular
                </div>
              )}

              {hostingType.type === "Reseller Hosting" && (
                <div className="absolute top-0 right-0 rounded-bl-full rounded-tl-full bg-red-400 shadow-lg text-black text-lg p-2 mt-4 px-12">
                  New
                </div>
              )}

            </Card>
          ))}
        </div>

      </div>
    </div>
  )
}