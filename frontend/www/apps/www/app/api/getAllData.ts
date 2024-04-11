import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import Content, { languageSchema } from './db';
import { Schema, model, connect } from 'mongoose';

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        await mongoose.connect("mongodb+srv://sumon:sumon1234@seyaha.pzour3n.mongodb.net/ProductList?retryWrites=true&w=majority&appName=seyaha");
        const content = await Content.find({});

        if (!content) {
            return res.status(404).json({ message: 'No content found' });
        }

        const languages = Array.from(content);
        res.status(200).json(languages);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        await mongoose.disconnect();
    }
};

export default handler;
