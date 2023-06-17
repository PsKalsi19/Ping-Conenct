import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
    {
      _id: uuid(),
      content:
        "A founder gave an employee 10 days off since Employee was not taking rest even though he was ill.",
      likes: {
        likeCount: 0,
        likedBy: [],
      },
      username: "sagar@gmail.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "henry@example.com",
          text: "That's amazing",
        },
      ],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "A manager organized a team-building retreat to improve collaboration among employees.",
      likes: {
        likeCount: 2,
        likedBy: ["alice@example.com", "bob@example.com"],
      },
      username: "john@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "emma@example.com",
          text: "I wish my manager did that!",
          
        },
        {
          _id: uuid(),
          username: "grace@example.com",
          text: "Team-building activities are so much fun.",
         
        },
      ],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "An employer provided flexible working hours for a working parent to accommodate childcare responsibilities.",
      likes: {
        likeCount: 1,
        likedBy: ["emma@example.com"],
      },
      username: "david@example.com",
      bookmark: [],
      comments: [],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "A CEO recognized an employee's exceptional performance with a promotion and a pay raise.",
      likes: {
        likeCount: 4,
        likedBy: [
          "alice@example.com",
          "bob@example.com",
          "charlie@example.com",
          "david@example.com",
        ],
      },
      username: "john@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "emily@example.com",
          text: "Congratulations on the promotion!",
         
        },
        {
          _id: uuid(),
          username: "grace@example.com",
          text: "Hard work pays off.",
          
        },
        {
          _id: uuid(),
          username: "henry@example.com",
          text: "Well-deserved promotion!",
         
        },
      ],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "A manager granted an employee a sabbatical to pursue their passion project.",
      likes: {
        likeCount: 2,
        likedBy: ["frank@example.com", "henry@example.com"],
      },
      username: "alice@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "grace@example.com",
          text: "That's a dream come true!",
        
        },
      ],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "An employer sponsored an employee's participation in a professional development conference.",
      likes: {
        likeCount: 2,
        likedBy: ["henry@example.com", "emma@example.com"],
      },
      username: "bob@example.com",
      bookmark: [],
      comments: [],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "A founder personally mentored an employee to enhance their skills and career growth.",
      likes: {
        likeCount: 1,
        likedBy: ["grace@example.com"],
      },
      username: "charlie@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "henry@example.com",
          text: "That's exceptional leadership!",
         
        },
      ],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "An employer implemented a work-from-home policy to improve work-life balance for employees.",
      likes: {
        likeCount: 2,
        likedBy: ["emma@example.com", "frank@example.com"],
      },
      username: "david@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "grace@example.com",
          text: "Remote work is the future.",
        
        },
      ],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "A manager organized a team lunch to celebrate the successful completion of a project.",
      likes: {
        likeCount: 1,
        likedBy: ["alice@example.com"],
      },
      username: "bob@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "frank@example.com",
          text: "Food and success go well together!",
         
        },
      ],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "An employer sponsored a volunteer activity for employees to give back to the community.",
      likes: {
        likeCount: 1,
        likedBy: ["grace@example.com"],
      },
      username: "charlie@example.com",
      bookmark: [],
      comments: [],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "A CEO personally recognized an employee's effort with a handwritten thank-you note.",
      likes: {
        likeCount: 2,
        likedBy: ["alice@example.com", "emma@example.com"],
      },
      username: "frank@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "henry@example.com",
          text: "Small gestures make a big impact.",
        },
        {
          _id: uuid(),
          username: "grace@example.com",
          text: "It's the thought that counts.",
        },
      ],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "A manager provided a training budget for employees to attend professional development courses.",
      likes: {
        likeCount: 1,
        likedBy: ["henry@example.com"],
      },
      username: "emma@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "alice@example.com",
          text: "Investing in employees is key to growth.",
        },
      ],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "An employer offered a wellness program with gym memberships and mental health resources.",
      likes: {
        likeCount: 2,
        likedBy: ["bob@example.com", "frank@example.com"],
      },
      username: "grace@example.com",
      bookmark: [],
      comments: [],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "A founder organized a company-wide retreat to celebrate achieving annual goals.",
      likes: {
        likeCount: 2,
        likedBy: ["henry@example.com", "emma@example.com"],
      },
      username: "alice@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "bob@example.com",
          text: "That's a great way to foster team spirit.",
        },
      ],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "An employer introduced a profit-sharing program to reward employees for their contributions.",
      likes: {
        likeCount: 2,
        likedBy: ["emma@example.com", "frank@example.com"],
      },
      username: "bob@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "grace@example.com",
          text: "Incentives motivate employees to perform better.",
         
        },
      ],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "A manager implemented a mentorship program to support employees' career development.",
      likes: {
        likeCount: 1,
        likedBy: ["grace@example.com"],
      },
      username: "charlie@example.com",
      bookmark: [],
      comments: [],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content:
        "An employer sponsored an employee's participation in a leadership training program.",
      likes: {
        likeCount: 2,
        likedBy: ["alice@example.com", "frank@example.com"],
      },
      username: "david@example.com",
      bookmark: [],
      comments: [
        {
          _id: uuid(),
          username: "henry@example.com",
          text: "Investing in leadership skills benefits the entire organization.",
        },
      ],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content: "To code or not to code that is the Question.",
      likes: {
        likeCount: 1,
        likedBy: ["emma@example.com"],
      },
      username: "henry@example.com",
      bookmark: [],
      comments: [],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content: "Love is the greatest force in the universe. ❤️",
      likes: {
        likeCount: 2,
        likedBy: ["john@example.com", "emma@example.com"],
      },
      username: "henry@example.com",
      bookmark: [],
      comments: [],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content: "The best preparation for tomorrow is doing your best today.",
      likes: {
        likeCount: 2,
        likedBy: ["emma@example.com", "mark@example.com"],
      },
      username: "henry@example.com",
      bookmark: [],
      comments: [],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content: "Success is not the key to happiness. Happiness is the key to success.",
      likes: {
        likeCount: 1,
        likedBy: ["mark@example.com"],
      },
      username: "henry@example.com",
      bookmark: [],
      comments: [],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      content: "In the middle of every difficulty lies opportunity.",
      likes: {
        likeCount: 2,
        likedBy: ["alice@example.com", "john@example.com"],
      },
      username: "henry@example.com",
      bookmark: [],
      comments: [],
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
];
