// import React from "react";

// function Trending() {
//   return (
//     <div className="w-full h-screen p-10 mb-20">
//       <h1 className="text-3xl font-light p-10">Popular Courses</h1>

//       <div className=" w-full flex flex-wrap overflow-y-auto h-[100vh]  gap-8 m-10 mb-20">
//         <div className="max-w-[40vh] h-[45vh] rounded-md overflow-hidden shadow-lg backdrop-blur-3xl">
//          <div className="overflow-hidden">
//          <img
//             className="w-full h-[20vh] object-cover rounded-md"
//             src="https://media.istockphoto.com/id/1472333937/photo/finance-statistics-data-and-analytics-software-laptop-application-3d-render-business.jpg?s=612x612&w=0&k=20&c=Gq11iDCqx8Q8eniGqLDWLWpXl1H1zBS6BEisrUc3yGw="
//             alt="Placeholder Image"
//           />
//          </div>
//           <div className="px-2 py-3">
//             <div className=" text-xl mb-2">Title Here</div>
//             <p className="text-gray-700 text-base">
//               Description goes here. You can write a brief summary of the content.
//             </p>
//           </div>
//           <div className="px-3 py-4">
//             <button className="bg-teal-500 hover:bg-zinc-200 hover:text-gray-400 text-white  py-1 px-16 rounded">
//               Show
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Trending;
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

function Trending() {
  return (
    <div className="w-full h-screen p-10 mb-20 m-10">
      <h1 className="text-3xl font-light p-10">Popular Courses</h1>

      <div className="w-full flex flex-wrap overflow-y-auto gap-8   mb-20">
        <Card className="max-w-[400px] shadow-xl">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">NextUI</p>
              <p className="text-small text-default-500">nextui.org</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
        <Card className="max-w-[400px] shadow-xl">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">NextUI</p>
              <p className="text-small text-default-500">nextui.org</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
        <Card className="max-w-[400px] shadow-xl">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">NextUI</p>
              <p className="text-small text-default-500">nextui.org</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
        <Card className="max-w-[400px] shadow-xl">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">NextUI</p>
              <p className="text-small text-default-500">nextui.org</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Trending;
