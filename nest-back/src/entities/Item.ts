import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Item', { schema: 'dev' })
export class Item {
  @PrimaryGeneratedColumn({ type: 'int', name: 'item_id', unsigned: true })
  itemId: number;

  @Column('text', { name: 'name' })
  name: string;

  @Column('double', { name: 'price' })
  price: number;

  @Column('int', { name: 'quantity', unsigned: true })
  quantity: number;
}
