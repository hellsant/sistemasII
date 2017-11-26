export class Curso {
  private id: number;

  private nCurso: number;

  private paralelo: string;

  public getparalelo(): string {
    return this.paralelo;
  }
  public setparalelo(v: string) {
    this.paralelo = v;
  }

  public getid(): number {
    return this.id;
  }
  public setid(v: number) {
    this.id = v;
  }
  public getgrado(): number {
    return this.nCurso;
  }
  public setgrado(v: number) {
    this.nCurso = v;
  }

  /**
   *
   */
  constructor() {}
}
