export interface UserProfile {
    data: {
        id: string,
        attributes: {
            user_info: userInfo,
            createdAt: string,
            updatedAt: string,
            publishedAt: string
        }
    },
    meta: {}
}

export interface userInfo {
    link: [],
    logo: string,
    title: string,
    info_bio: string,
    phone:string,
    client_id: string,
}