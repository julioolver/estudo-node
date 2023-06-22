import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];
  private static STANCE: SpecificationsRepository;


  constructor() {
    this.specifications = [];
  }

  public static getInstance() {
    if (!this.STANCE) {
      SpecificationsRepository.STANCE = new SpecificationsRepository();
    }

    return this.STANCE
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(
      (specificaton) => specificaton.name === name
    );

    return specification;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }
}

export { SpecificationsRepository };
