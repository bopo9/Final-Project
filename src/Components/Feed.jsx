import React, {useEffect} from 'react';
import Tweet from "./Tweet";
import { connect} from "react-redux";
import { getPosts as getPostsAction,
    deletePost as  deletePostAction,
    getProfilePosts as getProfilePostsAction
} from '../redux/modules/posts';


function Feed ({ posts, getPosts, deletePost, auth, profile, getProfilePosts}) {
    useEffect(() => {
        profile? getProfilePosts(auth.email): getPosts();
    }, []);

    const postCreatedAtCounter = (createdAt) => {
        const date = {
            currentDate: new Date(),
            datesPosted: new Date(createdAt)
        }

        let diffDate = {
            createdAt: new Date(createdAt).toLocaleDateString(),
            minutes: ({currentDate, datesPosted}) => {
                return Math.abs(new Date(currentDate).getMinutes() - new Date(datesPosted).getMinutes());
            },
            hours: ({currentDate, datesPosted}) => {
                return Math.abs(new Date(currentDate).getHours() - new Date(datesPosted).getHours())
            },
            days: ({currentDate, datesPosted}) => {
                return Math.abs(new Date(currentDate).getDate() - new Date(datesPosted).getDate())
            },
            month: ({currentDate, datesPosted}) => {
                return Math.abs(new Date(currentDate).getMonth() - new Date(datesPosted).getMonth())
            },
            getTime: (date) => {
                return {
                    minutes: diffDate.minutes(date),
                    hours: diffDate.hours(date),
                    days: diffDate.days(date),
                    month: diffDate.month(date),
                }
            },
            getResult: ({minutes, hours, days, month}) => {
                switch (false) {
                    case month <= 0:
                        return month + ' month ago..';
                    case days <= 0:
                        return days + ' days ago..';
                    case hours <= 0:

                        return hours + ' hours ago..';
                    case minutes <= 0:
                        return minutes = 0 ? 'now' : minutes + ' min ago..';

                }
            }
        }
        return diffDate.getResult(diffDate.getTime(date));
    }

    return (
        <div className="tweet__list">
            {
                posts ? posts.map(post => (
                    <Tweet
                        deletePost={post.authorId.email === auth.email? deletePost : false}
                        userId={post.authorId._id}
                        key={post._id}
                        postId={post._id}
                        body={post.content}
                        authorId={post.authorId._id}
                        firstName={post.authorId.firstName}
                        lastName={post.authorId.lastName}
                        nickname={post.authorId.nickname}
                        content={post.content}
                        datePosted={postCreatedAtCounter(post.createdAt)}
                    >
                    </Tweet>
                )): 0 //todo error
            }
        </div>
    );
}

export default connect(
    ({ posts, auth }) => ({ posts: posts.posts, auth: auth}),
    {
        getPosts: getPostsAction,
        deletePost: deletePostAction,
        getProfilePosts: getProfilePostsAction
    }
)(Feed);




// TimePost = datePosted => {
//     const date = {
//         currentDate: new Date(),
//         datesPosted: new Date(datePosted)
//     }
//
//     let diffDate = {
//         createdAt: new Date(datePosted).toLocaleDateString(),
//         minutes: ({currentDate, datesPosted}) => {
//             return Math.abs(new Date(currentDate).getMinutes() - new Date(datesPosted).getMinutes());
//         },
//         hours: ({currentDate, datesPosted}) => {
//             return Math.abs(new Date(currentDate).getHours() - new Date(datesPosted).getHours())
//         },
//         days: ({currentDate, datesPosted}) => {
//             return Math.abs(new Date(currentDate).getDate() - new Date(datesPosted).getDate())
//         },
//         month: ({currentDate, datesPosted}) => {
//             return Math.abs(new Date(currentDate).getMonth() - new Date(datesPosted).getMonth())
//         },
//         getTime: (date) => {
//             return {
//                 minutes: diffDate.minutes(date),
//                 hours: diffDate.hours(date),
//                 days: diffDate.days(date),
//                 month: diffDate.month(date),
//             }
//         },
//         getResult: ({minutes, hours, days, month}) => {
//             // this.setState({
//             //     time: ''
//             // })
//
//             switch (false) {
//                 case month <= 0:
//                     // this.setState({
//                     //     time: month + ' month ago..'
//                     // });
//                     // break;
//                     return month + ' month ago..';
//                 case days <= 0:
//                     // this.setState({
//                     //     time: days + ' days ago..'
//                     // });
//                     // break;
//                     return days + ' days ago..';
//                 case hours <= 0:
//                     // this.setState({
//                     //     time: hours + ' hours ago..'
//                     // });
//                     // break;
//                     return hours + ' hours ago..';
//                 case minutes <= 0:
//                     // this.setState({
//                     //     time: minutes + ' min ago..'
//                     // });
//                     // break;
//                     return minutes = 0? 'now' : minutes + ' min ago..';
//
//             }
//         }
//     }
//     console.log(diffDate.getResult(diffDate.getTime()))
//     return diffDate.getResult(diffDate.getTime(date));
//
//     return 1;
// }
