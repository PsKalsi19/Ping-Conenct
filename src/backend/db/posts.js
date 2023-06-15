import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  [
    {
      _id: uuid(),
      content:
        "A founder gave an employee 10 days off during the notice period so that the employee could visit his sick grandmother.",
      likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },
      username: "sagar@gmail.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "shrey@gmail.com",
          text: "That's amazing",
          votes: {
            upvotedBy: [],
            downvotedBy: [],
          },
        },
      ],
      createdAt: "2020-04-23T15:20:12+05:30",
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "A manager organized a team-building retreat to improve collaboration among employees.",
      likes: {
        likeCount: 5,
        likedBy: ["alice@example.com", "bob@example.com"],
        dislikedBy: [],
      },
      username: "john@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "emma@example.com",
          text: "I wish my manager did that!",
          votes: {
            upvotedBy: ["frank@example.com"],
            downvotedBy: [],
          },
        },
        {
          _id: uuid(),
          username: "grace@example.com",
          text: "Team-building activities are so much fun.",
          votes: {
            upvotedBy: [],
            downvotedBy: [],
          },
        },
      ],
      createdAt: "2022-11-10T09:45:21+03:00",
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "An employer provided flexible working hours for a working parent to accommodate childcare responsibilities.",
      likes: {
        likeCount: 2,
        likedBy: ["emma@example.com"],
        dislikedBy: [],
      },
      username: "david@example.com",
      bookmark: [],
      comments: [],
      createdAt: "2023-01-05T14:35:10+02:00",
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "A CEO recognized an employee's exceptional performance with a promotion and a pay raise.",
      likes: {
        likeCount: 10,
        likedBy: [
          "alice@example.com",
          "bob@example.com",
          "charlie@example.com",
          "david@example.com",
        ],
        dislikedBy: [],
      },
      username: "john@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "emily@example.com",
          text: "Congratulations on the promotion!",
          votes: {
            upvotedBy: ["frank@example.com"],
            downvotedBy: [],
          },
        },
        {
          _id: uuid(),
          username: "grace@example.com",
          text: "Hard work pays off.",
          votes: {
            upvotedBy: ["alice@example.com"],
            downvotedBy: [],
          },
        },
        {
          _id: uuid(),
          username: "henry@example.com",
          text: "Well-deserved promotion!",
          votes: {
            upvotedBy: [],
            downvotedBy: [],
          },
        },
      ],
      createdAt: "2023-03-20T11:15:42+03:00",
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "A manager granted an employee a sabbatical to pursue their passion project.",
      likes: {
        likeCount: 3,
        likedBy: ["frank@example.com", "henry@example.com"],
        dislikedBy: [],
      },
      username: "alice@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "grace@example.com",
          text: "That's a dream come true!",
          votes: {
            upvotedBy: [],
            downvotedBy: [],
          },
        },
      ],
      createdAt: "2023-04-18T08:20:30+02:00",
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "An employer sponsored an employee's participation in a professional development conference.",
      likes: {
        likeCount: 7,
        likedBy: ["henry@example.com", "emma@example.com"],
        dislikedBy: [],
      },
      username: "bob@example.com",
      bookmark: [],
      comments: [],
      createdAt: "2023-05-02T16:45:15+03:00",
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "A founder personally mentored an employee to enhance their skills and career growth.",
      likes: {
        likeCount: 1,
        likedBy: ["grace@example.com"],
        dislikedBy: [],
      },
      username: "charlie@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "henry@example.com",
          text: "That's exceptional leadership!",
          votes: {
            upvotedBy: [],
            downvotedBy: [],
          },
        },
      ],
      createdAt: "2023-05-14T10:55:50+03:00",
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "An employer implemented a work-from-home policy to improve work-life balance for employees.",
      likes: {
        likeCount: 4,
        likedBy: ["emma@example.com", "frank@example.com"],
        dislikedBy: [],
      },
      username: "david@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "grace@example.com",
          text: "Remote work is the future.",
          votes: {
            upvotedBy: ["alice@example.com"],
            downvotedBy: [],
          },
        },
      ],
      createdAt: "2023-05-29T13:10:05+02:00",
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "A manager organized a team lunch to celebrate the successful completion of a project.",
      likes: {
        likeCount: 2,
        likedBy: ["alice@example.com"],
        dislikedBy: [],
      },
      username: "bob@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "frank@example.com",
          text: "Food and success go well together!",
          votes: {
            upvotedBy: [],
            downvotedBy: [],
          },
        },
      ],
      createdAt: "2023-06-07T11:25:40+03:00",
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "An employer sponsored a volunteer activity for employees to give back to the community.",
      likes: {
        likeCount: 3,
        likedBy: ["grace@example.com"],
        dislikedBy: [],
      },
      username: "charlie@example.com",
      bookmark: [],
      comments: [],
      createdAt: "2023-06-12T09:30:18+02:00",
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "A CEO personally recognized an employee's effort with a handwritten thank-you note.",
      likes: {
        likeCount: 6,
        likedBy: ["alice@example.com", "emma@example.com"],
        dislikedBy: [],
      },
      username: "frank@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "henry@example.com",
          text: "Small gestures make a big impact.",
          votes: {
            upvotedBy: ["bob@example.com"],
            downvotedBy: [],
          },
        },
        {
          _id: uuid(),
          username: "grace@example.com",
          text: "It's the thought that counts.",
          votes: {
            upvotedBy: [],
            downvotedBy: [],
          },
        },
      ],
      createdAt: "2023-06-20T14:15:55+03:00",
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "A manager provided a training budget for employees to attend professional development courses.",
      likes: {
        likeCount: 1,
        likedBy: ["henry@example.com"],
        dislikedBy: [],
      },
      username: "emma@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "alice@example.com",
          text: "Investing in employees is key to growth.",
          votes: {
            upvotedBy: [],
            downvotedBy: [],
          },
        },
      ],
      createdAt: "2023-06-25T10:50:30+02:00",
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "An employer offered a wellness program with gym memberships and mental health resources.",
      likes: {
        likeCount: 4,
        likedBy: ["bob@example.com", "frank@example.com"],
        dislikedBy: [],
      },
      username: "grace@example.com",
      bookmark: [],
      comments: [],
      createdAt: "2023-06-29T16:40:20+03:00",
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "A founder organized a company-wide retreat to celebrate achieving annual goals.",
      likes: {
        likeCount: 3,
        likedBy: ["henry@example.com", "emma@example.com"],
        dislikedBy: [],
      },
      username: "alice@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "bob@example.com",
          text: "That's a great way to foster team spirit.",
          votes: {
            upvotedBy: [],
            downvotedBy: [],
          },
        },
      ],
      createdAt: "2023-07-05T09:55:45+02:00",
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "An employer introduced a profit-sharing program to reward employees for their contributions.",
      likes: {
        likeCount: 6,
        likedBy: ["emma@example.com", "frank@example.com"],
        dislikedBy: [],
      },
      username: "bob@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "grace@example.com",
          text: "Incentives motivate employees to perform better.",
          votes: {
            upvotedBy: ["alice@example.com"],
            downvotedBy: [],
          },
        },
      ],
      createdAt: "2023-07-10T12:25:10+03:00",
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "A manager implemented a mentorship program to support employees' career development.",
      likes: {
        likeCount: 2,
        likedBy: ["grace@example.com"],
        dislikedBy: [],
      },
      username: "charlie@example.com",
      bookmark: [],
      comments: [],
      createdAt: "2023-07-15T14:50:05+02:00",
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "An employer sponsored an employee's participation in a leadership training program.",
      likes: {
        likeCount: 4,
        likedBy: ["alice@example.com", "frank@example.com"],
        dislikedBy: [],
      },
      username: "david@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "henry@example.com",
          text: "Investing in leadership skills benefits the entire organization.",
          votes: {
            upvotedBy: ["emma@example.com"],
            downvotedBy: [],
          },
        },
      ],
      createdAt: "2023-07-20T17:15:30+03:00",
      updatedAt: formatDate(),
    },
  ],
];
