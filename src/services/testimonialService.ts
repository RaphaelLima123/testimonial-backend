import { TestimonialRepository } from '../repositories/testimonialRepository'

export interface testimonialData {
  testimonial: string
  name: string
}

const testimonialRepository = new TestimonialRepository()

export class TestimonialService {
  async create(testimonialData: testimonialData) {
    return await testimonialRepository.create(testimonialData)
  }

  async getAll() {
    return await testimonialRepository.getAll()
  }
}
