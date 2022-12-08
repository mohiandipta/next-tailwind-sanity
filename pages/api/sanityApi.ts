import { NextApiRequest, NextApiResponse } from "next";
import { createClient, groq } from "next-sanity";

const config = createClient({
  projectId: "z9kp3a1c",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false
});

const sanityClient = config

const query = groq`*[_type == "Form"]`

export interface sForm {
  _Number: string;
  _lebel: string;
  _input: string;
}

const GetFormData = async(req:NextApiRequest, res:NextApiResponse) => {
    const response: sForm[] = await sanityClient.fetch(query)
    res.status(200).send(response)
}

const Data = {
    GetFormData
}

export default Data