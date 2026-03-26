import { environment } from '../../../environments/environment';

export const App_Apis = {
  auth: {
    signUp: `${environment.baseUrl}/users/signup`,
    signin: `${environment.baseUrl}/users/signin`,
  },
  posts: `${environment.baseUrl}/posts`,

  bookmarksPosts: `${environment.baseUrl}/users/bookmarks`,

  users: `${environment.baseUrl}/users`,

  notifications: `${environment.baseUrl}/notifications`,

  follow: {
        put: `${environment.baseUrl}/users`
    },
    userProfile: {
        get: `${environment.baseUrl}/users/profile-data`
    },
    uploadProfilePic: {
        put: `${environment.baseUrl}/users/upload-photo`
    },
     updatePost: {
        put: `${environment.baseUrl}/posts/`
    },
    deletePost: {
        delete: `${environment.baseUrl}/posts/`
    },
    likePost: {
        put: `${environment.baseUrl}/posts`
    },
    postLikes: {
        get: `${environment.baseUrl}/posts`
    },
    sharePost: {
        put: `${environment.baseUrl}/posts`
    },
    allNotifications: {
        get: `${environment.baseUrl}/notifications`
    },
    markAsRead: {
        patch: `${environment.baseUrl}/notifications`
    },
    markAllAsRead: {
        patch: `${environment.baseUrl}/notifications/read-all`
    },
    getUnreadCounts: {
        get: `${environment.baseUrl}/notifications/unread-count`
    },
    changePassword: {
        patch: `${environment.baseUrl}/users/change-password`
    }
};
