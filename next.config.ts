import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "u9a6wmr3as.ufs.sh",
                port: "",
                pathname: "/f/**"
            }
        ],
        imageSizes: [16, 32, 48, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 128, 256, 384]
    }

};

export default nextConfig;
