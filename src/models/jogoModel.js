import prisma from "../../prisma/client.js";

class jogoModel {
  getAll = async () => {
    return await prisma.task.findMany();
  };

  create = async (titulo, preco, anoLancamento, empresaDesenvolvedora, generos, plataformasDisponiveis, image) => {
    return await prisma.task.create({
      data: {
        titulo,
        preco,
        anoLancamento,
        empresaDesenvolvedora,
        generos,
        plataformasDisponiveis,
        image,
      },
    });
  };

  update = async (id, titulo, preco, anoLancamento, empresaDesenvolvedora, generos, plataformasDisponiveis, image) => {
    try {
      const jogo = await prisma.task.update({
        where: { id },
        data: {
          titulo,
          preco,
          anoLancamento,
          empresaDesenvolvedora,
          generos,
          plataformasDisponiveis,
          image,
        },
      });

      return jogo;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const jogoDeletado = await prisma.task.delete({
        where: { id },
      });

      return jogoDeletado;
    } catch (error) {
      console.log("Erro ao deletar o jogo!", error);
      throw error;
    }
  };
}
export default new JogoModel();
