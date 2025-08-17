import Image from "next/image";


export default function AllSongs() {
  return (

    <div className="min-h-[90vh] bg-background my-15 p-4 lg:ml-80 rounded-lg mx-4
    ">
        <h2 className="text-2xl font-semibold mb-3 text-white">
            New Songs
        </h2>

        <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
                <Image src="/images/cover-1.jpeg" alt="cover image" width={500} height={500} className="w-full h-50 object-cover rounded-md" />
                <div className="mt-2">
                    <p className="text-primary-text font-semibold">Rain on Marble Streets</p>
                    <p className="text-secondary-text text-sm">By The Lanterns</p>
                </div>
            </div>
            <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
                <Image src="/images/cover-2.jpeg" alt="cover image" width={500} height={500} className="w-full h-50 object-cover rounded-md" />
                <div className="mt-2">
                    <p className="text-primary-text font-semibold">Jamaican Jersey</p>
                    <p className="text-secondary-text text-sm">By The Band</p>
                </div>
            </div>
            <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
                <Image src="/images/cover-3.jpeg" alt="cover image" width={500} height={500} className="w-full h-50 object-cover rounded-md" />
                <div className="mt-2">
                    <p className="text-primary-text font-semibold">Lost Feelings</p>
                    <p className="text-secondary-text text-sm">By The Spooky System</p>
                </div>
            </div>
            <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
                <Image src="/images/cover-4.jpeg" alt="cover image" width={500} height={500} className="w-full h-50 object-cover rounded-md" />
                <div className="mt-2">
                    <p className="text-primary-text font-semibold">Little Castle</p>
                    <p className="text-secondary-text text-sm">By The Dreamers</p>
                </div>
            </div>
            <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
                <Image src="/images/cover-5.jpeg" alt="cover image" width={500} height={500} className="w-full h-50 object-cover rounded-md" />
                <div className="mt-2">
                    <p className="text-primary-text font-semibold">Midnight Echoes</p>
                    <p className="text-secondary-text text-sm">By Jump Street</p>
                </div>
            </div>
            <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
                <Image src="/images/cover-6.jpeg" alt="cover image" width={500} height={500} className="w-full h-50 object-cover rounded-md" />
                <div className="mt-2">
                    <p className="text-primary-text font-semibold">Rain on Marble Streets</p>
                    <p className="text-secondary-text text-sm">By The Lanterns</p>
                </div>
            </div>
        </div>
        
            
        


    </div>
    
  );
}