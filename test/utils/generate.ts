import faker from 'faker'
import { Post, User } from '../../src/models'

export function generateUserData(overide = {}) {
	return {
		id: faker.datatype.number(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		email: faker.internet.email(),
		posts: [],
		comments: [],
		createdAt: new Date(),
		updatedAt: new Date(),
		...overide,
	}
}

export function generateUsersData(n: number = 1, overide = {}) {
	return Array.from(
		{
			length: n,
		},
		(_, i) => {
			return generateUserData({ id: i, ...overide })
		},
	)
}

export function generateUserPayload() {
	return {
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		email: faker.internet.email(),
	}
}

export function generatePostData(overide = {}) {
	return {
		id: faker.datatype.number(),
		title: faker.lorem.sentence(),
		content: faker.lorem.paragraph(),
		userId: faker.datatype.number(),
		comments: [],
		user: new User(),
		createdAt: new Date(),
		updatedAt: new Date(),
		...overide,
	}
}

export function generatePostsData(n: number = 1, overide = {}) {
	return Array.from(
		{
			length: n,
		},
		(_, i) => {
			return generatePostData({ id: i, ...overide })
		},
	)
}

export function generatePostPayload() {
	return {
		title: faker.lorem.sentence(),
		content: faker.lorem.paragraph(),
		userId: faker.datatype.number(),
	}
}

export function generateCommentData(overide = {}) {
	return {
		id: faker.datatype.number(),
		content: faker.lorem.paragraph(),
		userId: faker.datatype.number(),
		user: new User(),
		postId: faker.datatype.number(),
		post: new Post(),
		createdAt: new Date(),
		updatedAt: new Date(),
		...overide,
	}
}

export function generateCommentsData(n: number = 1, overide = {}) {
	return Array.from(
		{
			length: n,
		},
		(_, i) => {
			return generateCommentData(overide)
		},
	)
}

export function generateCommentPayload() {
	return {
		content: faker.lorem.paragraph(),
		userId: faker.datatype.number(),
		postId: faker.datatype.number(),
	}
}
