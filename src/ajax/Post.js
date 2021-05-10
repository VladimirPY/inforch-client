

export default class Post{
    constructor(){
        console.log(this.getList)
    }

    static getPosts(filter = []){
        return Object.entries({
            user_1 :{
                id : 1,
                avatar_src : "%PUBLIC_URL%/images/photo.svg",
                title : 'TITLE',
                date : Date.now(),
                text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum sed a diam ut donec amet lectus. Vel magna nibh eget id sed eu purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum sed a diam ut donec amet lectus. Bibendum sed a diam ut donec amet lectus. Bibendum sed a diam ut donec amet lectus.',
                post_img_src : "%PUBLIC_URL%/images/photo.svg"
            },
            user_2 :{
                id : 1,
                avatar_src : "%PUBLIC_URL%/images/photo.svg",
                title : 'TITLE',
                date : Date.now(),
                text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum sed a diam ut donec amet lectus. Vel magna nibh eget id sed eu purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum sed a diam ut donec amet lectus. Bibendum sed a diam ut donec amet lectus. Bibendum sed a diam ut donec amet lectus.',
                post_img_src : "%PUBLIC_URL%/images/photo.svg"
            },
            user_3 :{
                id : 1,
                avatar_src : "%PUBLIC_URL%/images/photo.svg",
                title : 'TITLE',
                date : Date.now(),
                text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum sed a diam ut donec amet lectus. Vel magna nibh eget id sed eu purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum sed a diam ut donec amet lectus. Bibendum sed a diam ut donec amet lectus. Bibendum sed a diam ut donec amet lectus.',
                post_img_src : "%PUBLIC_URL%/images/photo.svg"
            },
            user_4 :{
                id : 1,
                avatar_src : "%PUBLIC_URL%/images/photo.svg",
                title : 'TITLE',
                date : Date.now(),
                text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum sed a diam ut donec amet lectus. Vel magna nibh eget id sed eu purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum sed a diam ut donec amet lectus. Bibendum sed a diam ut donec amet lectus. Bibendum sed a diam ut donec amet lectus.',
                post_img_src : "%PUBLIC_URL%/images/photo.svg"
            },            
            user_5 :{
                id : 1,
                avatar_src : "%PUBLIC_URL%/images/photo.svg",
                title : 'TITLE',
                date : Date.now(),
                text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum sed a diam ut donec amet lectus. Vel magna nibh eget id sed eu purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum sed a diam ut donec amet lectus. Bibendum sed a diam ut donec amet lectus. Bibendum sed a diam ut donec amet lectus.',
                post_img_src : "%PUBLIC_URL%/images/photo.svg"
            }

        });
    }
}