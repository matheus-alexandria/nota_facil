import { useContext } from 'react';
import styled from 'styled-components';
import { ItemsContext } from '../contexts/ItemsContext/data';

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`

const Container = styled.div`
  width: 500px;
  font-family: Arial, sans-serif;
  background-color: white;

  @media print {
    padding: 0;
    margin: 0;
    background-color: white;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #333;

  @media print {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 1px solid #000;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  color: #333;

  @media print {
    font-size: 20px;
    margin: 0;
  }
`;

const BackButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: #45a049;
  }

  @media print {
    display: none;
  }
`;

const PrintButton = styled.button`
  background-color: #2196F3;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.2s;
  margin-left: 10px;

  &:hover {
    background-color: #0b7dda;
  }

  @media print {
    display: none;
  }
`;

const ItemsSection = styled.div`
  margin-bottom: 24px;
`;

const ItemsTitle = styled.h2`
  font-size: 16px;
  color: #333;
  margin-bottom: 12px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;

  @media print {
    font-size: 14px;
    page-break-inside: avoid;
  }
`;

const ItemLine = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 14px;
  color: #333;
  border-bottom: 1px dotted #eee;

  @media print {
    font-size: 12px;
    padding: 6px 0;
    page-break-inside: avoid;
  }
`;

const ItemLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ItemName = styled.span`
  font-weight: 600;
  color: #333;

  @media print {
    font-size: 12px;
  }
`;

const ItemDetails = styled.span`
  font-size: 12px;
  color: #666;

  @media print {
    font-size: 11px;
  }
`;

const ItemRight = styled.div`
  text-align: right;
  font-weight: 600;
  color: #4CAF50;
  min-width: 80px;

  @media print {
    font-size: 12px;
  }
`;

const SummarySection = styled.div`
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 4px;
  margin-top: 24px;

  @media print {
    background-color: white;
    border: 1px solid #ddd;
    page-break-inside: avoid;
  }
`;

const SummaryTitle = styled.h3`
  font-size: 16px;
  margin: 0 0 12px 0;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;

  @media print {
    font-size: 14px;
    page-break-inside: avoid;
  }
`;

const SummaryLine = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 14px;

  @media print {
    font-size: 12px;
    page-break-inside: avoid;
  }
`;

const SummaryLabel = styled.span`
  color: #333;
  font-weight: 500;
`;

const SummaryValue = styled.span`
  font-weight: 600;
  color: #4CAF50;
`;

const TotalLine = styled(SummaryLine)`
  border-top: 2px solid #333;
  padding-top: 12px;
  margin-top: 12px;
  font-size: 16px;

  @media print {
    border-top: 1px solid #000;
    font-size: 14px;
    page-break-inside: avoid;
  }
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #999;
  padding: 40px 20px;
  font-size: 16px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  @media print {
    display: none;
  }
`;

export default function PrintPage() {
  const itemsContext = useContext(ItemsContext);

  const totalItems = itemsContext.items.reduce((sum, item) => sum + item.amount, 0);
  const totalPrice = itemsContext.items.reduce((sum, item) => sum + item.price * item.amount, 0);

  const handlePrint = () => {
    window.print();
  };

  // const handleBack = () => {
  //   navigate('/');
  // };

  return (
    <Background>
      <Container>
        <Header>
          <Title>Resumo da Compra</Title>
          <ActionButtons>
            <PrintButton onClick={handlePrint}>
              🖨️ Imprimir
            </PrintButton>
            <BackButton onClick={() => alert("Precisa fazer voltar")}>
              ← Voltar
            </BackButton>
          </ActionButtons>
        </Header>

        {itemsContext.items.length === 0 ? (
          <EmptyMessage>Nenhum produto para exibir.</EmptyMessage>
        ) : (
          <>
            <ItemsSection>
              <ItemsTitle>Produtos</ItemsTitle>
              {itemsContext.items.map((item) => (
                <ItemLine key={item.id}>
                  <ItemLeft>
                    <ItemName>{item.name}</ItemName>
                    <ItemDetails>
                      R${item.price.toFixed(2)} × {item.amount}
                    </ItemDetails>
                  </ItemLeft>
                  <ItemRight>
                    R${(item.price * item.amount).toFixed(2)}
                  </ItemRight>
                </ItemLine>
              ))}
            </ItemsSection>

            <SummarySection>
              <SummaryTitle>Resumo</SummaryTitle>
              <SummaryLine>
                <SummaryLabel>Total de itens:</SummaryLabel>
                <SummaryValue>{totalItems}</SummaryValue>
              </SummaryLine>
              <TotalLine>
                <SummaryLabel>Valor total:</SummaryLabel>
                <SummaryValue>R${totalPrice.toFixed(2)}</SummaryValue>
              </TotalLine>
            </SummarySection>
          </>
        )}
      </Container>
    </Background>
  );
}
