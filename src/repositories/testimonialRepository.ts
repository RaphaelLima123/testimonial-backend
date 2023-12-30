import { prisma } from '../database/prismaClient'
import { testimonialData } from '../services/testimonialService'

export class TestimonialRepository {
  async create(testimonialData: testimonialData) {
    const { testimonial, name } = testimonialData
    return await prisma.testimonial.create({
      data: {
        testimonial,
        author: {
          create: {
            name,
          },
        },
      },
    })
  }
}
