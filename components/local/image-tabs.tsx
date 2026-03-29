'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
export default function ImageTabs() {
    const [activeTab, setActiveTab] = useState("organize")//organize, hired, boards
    return (

        < section className="border-t bg-wihte py-16" >
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-6xl">
                    {/* tabs */}
                    <div className="flex gap-2 justify-center mb-8">
                        <Button className={`rounded-lg px-6 py-3 text-sm font-medium ${activeTab === "organize" ? "bg-primary text-white" : "bg-gray-100 text-gray-700"} cursor-pointer hover:bg-gray-200`} onClick={() => setActiveTab('organize')}>Organaize Applications</Button>
                        <Button className={`rounded-lg px-6 py-3 text-sm font-medium ${activeTab === "hired" ? "bg-primary text-white" : "bg-gray-100 text-gray-700"} cursor-pointer hover:bg-gray-200`} onClick={() => setActiveTab('hired')}>Get Hired</Button>
                        <Button className={`rounded-lg px-6 py-3 text-sm font-medium ${activeTab === "boards" ? "bg-primary text-white" : "bg-gray-100 text-gray-700"} cursor-pointer hover:bg-gray-200`} onClick={() => setActiveTab('boards')}>Manage Boards</Button>
                    </div>
                    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                        {activeTab === 'organize' && <Image src={'/hero-images/hero1.png'} alt="Organize application" width={1200} height={800} />}

                        {activeTab === 'hired' && <Image src={'/hero-images/hero2.png'} alt="Organize application" width={1200} height={800} />}
                        {activeTab === 'boards' && <Image src={'/hero-images/hero3.png'} alt="Organize application" width={1200} height={800} />}
                    </div>
                </div>
            </div>
        </section >

    )
}