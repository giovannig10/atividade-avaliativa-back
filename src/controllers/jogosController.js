import jogoModel from "../models/jogoModel.js";

//buscar todos os jogos
class JogoController {
  getAll = async (req, res) => {
    try {
      const jogos = await jogoModel.getAll();
      res.json(jogos);
        } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar jogos" });
    }
  };

//buscar jogos por id
  async getJogosById(req, res) {
    try {
      const { id } = req.params;

      const jogo = await jogoModel.findById(id);

      if (!jogo) {
        return res.status(404).json({ error: "Jogo não encontrado" });
      }

      res.json(jogo);
    } catch (error) {
      console.error("Erro ao buscar jogo:", error);
      res.status(500).json({ error: "Erro ao buscar jogo" });
    }
  };

// criar jogos
  create = async (req, res) => {
    const { titulo, preco, anoLancamento, empresaDesenvolvedora, generos, plataformasDisponiveis, image } = req.body;
    // const jogo = req.body.jogo;
    try {
      if (!titulo || !preco) {
        return res.status(400).json({ erro: "Titulo e preço são obrigatorios" });
      }

      const novoJogo = await jogoModel.create(titulo, preco, anoLancamento, empresaDesenvolvedora, generos, plataformasDisponiveis, image);
      res.status(201).json(novoJogo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar Jogo" });
    }
  };

//atualizar jogos
  update = async (req, res) => {
    const { id } = req.params;
    const { titulo, preco, anoLancamento, empresaDesenvolvedora, generos, plataformasDisponiveis, image } = req.body;

    try {
      const jogoAtualizado = await jogoModel.update(
        Number(id),
        titulo,
        preco,
        anoLancamento,
        empresaDesenvolvedora,
        generos,
        plataformasDisponiveis,
        image
      );

      if (!jogoAtualizado) {
        return res.status(404).json({ erro: "Jogo não encontrado!" });
      }

      res.json(jogoAtualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar jogo!" });
    }
  };

//deletar jogos
  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await jogoModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Jogo não encontrado" });
      }

      res.status(200).send({ message: "Jogo deletado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir jogo!" });
    }
  };
}
export default new JogoController();
