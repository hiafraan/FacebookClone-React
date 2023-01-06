import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Post
            alt="Raan"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            img_alt="Donut"
            img="https://cdn.pixabay.com/photo/2022/02/18/13/06/donut-7020625_960_720.jpg"
            img_content="Blender is a 3D graphics software that allows users to create 3D
          models, animations, and visual effects. One popular tutorial for
          beginners is the Blender 3D Donut tutorial, which teaches users how
          to create a simple 3D donut model using the software's various tools
          and features."
          />
          <Post
            alt="John"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            img_alt="Kali"
            img="https://www.kali.org/images/notebook-kali-2022.1.jpg"
            img_content="Kali Linux is a free, open-source operating system that is primarily used for penetration testing and security assessments. It is based on the Debian GNU/Linux distribution and includes a wide range of tools for tasks such as network discovery, vulnerability assessment, and forensic analysis. Kali Linux is maintained and funded by Offensive Security, a provider of information security training and penetration testing services."
          />
          <Post
            alt="James"
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600"
            img_alt="ChatGPT"
            img="https://upload.wikimedia.org/wikipedia/commons/5/51/ChatGPT.png"
            img_content="GPT (Generative Pre-training Transformer) is a language model that can generate human-like text for chatbot conversation and other tasks. It was developed by OpenAI and has been used in a number of commercial applications."
          />
          <Post
            alt="Emily"
            src=""
            img_alt="Bitcoin"
            img="https://images.unsplash.com/photo-1666034948846-ab8bd8f71d04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            img_content="Bitcoin is a decentralized digital currency that uses cryptography for security and is not controlled by any government or financial institution. It was created in 2009 by an anonymous individual or group of individuals using the pseudonym Satoshi Nakamoto. Transactions with bitcoin are recorded on a public ledger called the blockchain."
          />
          <Post
            alt="Taylor"
            src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600"
            img_alt="Graphic_design"
            img="https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            img_content="Graphic design is the process of visual communication and problem-solving through the use of typography, imagery, and color. It involves creating and combining symbols, images, and text to form visual representations of ideas and messages. Graphic design is used in a variety of fields, including print and digital media, marketing, and advertising."
          />
        </>
      )}
    </Box>
  );
};

export default Feed;
