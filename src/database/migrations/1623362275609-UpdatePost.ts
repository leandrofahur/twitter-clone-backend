import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class UpdatePost1623362275609 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "posts",
      new TableForeignKey({
        name: "comment_id_fk",
        referencedTableName: "comments",
        referencedColumnNames: ["id"],
        columnNames: ["comment_id"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("posts", "comment_id_fk");
  }
}
