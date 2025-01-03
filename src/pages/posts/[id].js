import Layout from "@/components/postLayout";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Head from "next/head";
import Date from "@/components/date";

export async function getStaticPaths (){
    const paths = getAllPostIds()
    return{
        paths,
        fallback:false,
    }
} 
export async function getStaticProps({params}) {
    const postData = await getPostData(params.id)
    return {
        props:{
            postData,
        }
    }
}

export default function Post({postData}){
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            {postData.title}
            <br />
            {postData.id}
            <br />
            <Date dateString={postData.date}/>
            <br />
            <div dangerouslySetInnerHTML={{__html:postData.contentHtml}}/>
        </Layout>
    )
}