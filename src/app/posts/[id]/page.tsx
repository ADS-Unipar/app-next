function Post({ params }: { params: { id: string } }){
    return params.id;
}
export default Post