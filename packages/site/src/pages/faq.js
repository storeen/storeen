import { Box, Button, Heading, Paragraph, Stack } from '@storeen/components';
import { Wrapper } from '@site/components';

import { useLayout } from '@site/hooks';

const FAQ = () => {
  const handleSignUp = () =>
    window.open('https://app-storeen.vercel.app/', '_ blank');

  return (
    <Box as="section" paddingX={3} paddingY={4} sx={{ textAlign: 'center' }}>
      <Wrapper>
        <Heading marginBottom={4}>Perguntas frequentes</Heading>
        <Paragraph marginBottom={10} color="muted">
          Verifique as perguntas e respostas abaixo, caso a sua dúvida não
          esteja nas perguntas nos envie um e-mail e iremos entrar em contato
          com você.
        </Paragraph>
        <Box as="section" paddingX={3} paddingY={4}>
          <Stack space="xlarge" sx={{ textAlign: 'justify' }}>
            <Stack space="xsmall">
              <Heading is="h3">Como abrir uma loja virtual na Storeen?</Heading>
              <Stack>
                <Paragraph>
                  Para abrir uma loja na Storeen é muito simples. =) Tudo o que
                  você precisa fazer é clicar no botão abaixo:
                </Paragraph>
                <Button onClick={handleSignUp}>Criar loja agora</Button>
                <Paragraph>
                  Ao criar sua loja na Storeen, iniciará automaticamente nosso
                  tour virtual, este que certamente vai te ajudar com os
                  primeiros passos.
                </Paragraph>
              </Stack>
            </Stack>
            <Stack space="xsmall">
              <Heading is="h3">
                Quanto custa ter uma loja virtual na Storeen?
              </Heading>
              <Paragraph>
                Na Storeen não importa o tamanho do seu negócio, nós acreditamos
                na igualdade e estamos prontos para atender você. Nós temos
                apenas um único preço.
              </Paragraph>
            </Stack>
            <Stack space="xsmall">
              <Heading is="h3">
                Eu preciso de CNPJ para abrir minha loja na Storeen?
              </Heading>
              <Stack>
                <Paragraph>
                  Não, aqui na Storeen você consegue abrir uma loja sem ter CNPJ
                  (Cadastro Nacional de Pessoas Jurídicas), mas nós super
                  recomendamos que você formalize a sua empresa o mais breve
                  possível.
                </Paragraph>
                <Paragraph>
                  Essa formalização evita por exemplo que o seu e-commerce tenha
                  problemas de ordem tributária no futuro. Uma vez que para
                  gerar a nota fiscal da venda é necessário o CNPJ. Um opção
                  seria abrir uma empresa MEI (microempreendedor individual).
                </Paragraph>
                <Paragraph>
                  E é claro que possuir um CNPJ tende também a ajudar na questão
                  de passar credibilidade para seu cliente, pois demostra que
                  tudo está sendo feito corretamente.
                </Paragraph>
              </Stack>
            </Stack>
            <Stack space="xsmall">
              <Heading is="h3">
                A Storeen é uma plataforma de loja virtual segura?
              </Heading>
              <Paragraph>
                Sim, essa é uma das nossas constantes preocupações. Cuidamos
                especialmente e meticulosamente desta questão para garantir que
                você não vá ter problemas com fraude no pagamento (por isso
                trabalhamos somente com gateways seguros) e garantimos dados
                criptografados e uma navegação segura para você e seus clientes
                com um certificado SSL.
              </Paragraph>
            </Stack>
            <Stack space="xsmall">
              <Heading is="h3">
                Nunca tive um e-commerce, posso ter uma loja virtual na Storeen?
              </Heading>
              <Stack>
                <Paragraph>
                  Sim – absolutamente – com certeza! E você vai ver que é muito
                  fácil e rápido. Ao criar sua loja na Storeen, iniciará
                  automaticamente nosso tour virtual, este que certamente vai te
                  ajudar com os primeiros passos.
                </Paragraph>
                <Paragraph>
                  E para criar sua loja agora mesmo clique no botão abaixo:
                </Paragraph>
                <Button onClick={handleSignUp}>Criar loja agora</Button>
              </Stack>
            </Stack>
            <Stack space="xsmall">
              <Heading is="h3">
                Eu preciso obrigatoriamente de um profissional para montar minha
                loja aqui na Storeen?
              </Heading>
              <Stack>
                <Paragraph>
                  Não, a plataforma da Storeen foi toda pensada para ser de
                  fácil entendimento e muito intuitiva. Você mesmo consegue
                  criar sua loja virtual, escolher e personalizar um tema
                  diretamente no painel administrativo da sua loja.
                </Paragraph>
                <Paragraph>
                  Mas é claro, que se você vier a sentir necessidade de ajuda,
                  talvez ter um profissional possa ser de grande auxílio quando
                  o assunto for temas e personalizações e customizações.
                </Paragraph>
              </Stack>
            </Stack>
            <Stack space="xsmall">
              <Heading is="h3">
                Preciso obrigatoriamente ter um domínio próprio?
              </Heading>
              <Stack>
                <Paragraph>
                  Não. Ao criar sua loja virtual na Storeen você terá direito a
                  um subdomínio gratuito e o endereço da sua loja ficará nesse
                  formato: nomedasualoja.storeen.com.br.
                </Paragraph>
                <Paragraph>
                  Porém caso queira utilizar um domínio próprio (exemplo:
                  nomedasualoja.com.br) você vai precisar adquiri-lo por exemplo
                  no registro.br ou no Godaddy. Para saber mais sobre
                  disponibilidade de domínio, valores e planos solicitamos que
                  entre em contato diretamente com eles. Nós da Storeen não
                  realizamos venda de domínios próprios.
                </Paragraph>
              </Stack>
            </Stack>
            <Stack space="xsmall">
              <Heading is="h3">
                Posso ter mais uma loja virtual na Storeen ?
              </Heading>
              <Stack>
                <Paragraph>
                  Sim! Você pode ter quantas lojas você quiser na Storeen. O
                  importante é que para cada loja criada você irá precisar em um
                  e-mail de cadastro diferente.
                </Paragraph>
                <Paragraph>
                  Importante! Você nunca irá conseguir criar duas lojas com o
                  mesmo e-mail.
                </Paragraph>
              </Stack>
            </Stack>
            <Stack space="xsmall">
              <Heading is="h3">O que é SKU?</Heading>
              <Stack>
                <Paragraph>
                  SKU ( Stock Keeping Unit ou Unidade de Manutenção de Estoque,
                  em tradução livre) é o código que identifica um determinado
                  produto e auxilia no controle e manutenção do estoque da sua
                  loja.
                </Paragraph>
                <Paragraph>
                  O código SKU é usado para diferenciar os produtos de acordo
                  com suas características específicas, como por exemplo:
                  Tamanho Forma Cor Marca e etc.
                </Paragraph>
                <Paragraph>
                  Importante! Todo produto deve receber um código SKU distinto.
                  Ou seja, se você vende camisetas com uma determinada estampa,
                  e possui variações de cor e tamanho, o código SKU será
                  diferente para cada tamanho (P, M, G, etc.) e cor.
                </Paragraph>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default useLayout(FAQ);