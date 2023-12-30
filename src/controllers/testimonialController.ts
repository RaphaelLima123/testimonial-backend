import { Request, Response } from 'express'
import { TestimonialService } from '../services/testimonialService'

const testimonialService = new TestimonialService()

export class TestimonialController {
  async create(request: Request, response: Response) {
    try {
      const { testimonial, author } = request.body
      const testimonialCreated = await testimonialService.create({
        testimonial,
        name: author,
      })
      return response.status(200).json(testimonialCreated)
    } catch (error) {
      return response
        .status(500)
        .json({ message: `Something happened ${error}` })
    }
  }

  async getFirst(request: Request, response: Response) {
    try {
      const allTestimonial = await testimonialService.getAll()
      const firstTestimonial = allTestimonial[0]
      return response.status(200).json(firstTestimonial)
    } catch (error) {
      return response
        .status(500)
        .json({ message: `Something happened ${error}` })
    }
  }
}
