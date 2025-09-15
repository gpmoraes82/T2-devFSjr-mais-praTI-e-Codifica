import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Skeleton from "./Skeleton";

const Card = styled.article`
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.spacing.radius};
  padding: ${({ theme }) => theme.spacing.base};
  display:flex; flex-direction:column; gap:0.5rem;
  transition: transform ${({ theme }) => theme.transition} ease, box-shadow ${({ theme }) => theme.transition} ease;
  &:hover { transform: translateY(-4px); box-shadow: 0 8px 20px ${({ theme }) => theme.colors.cardHover}; }
  &:focus-within { box-shadow: 0 0 0 4px rgba(37,99,235,0.08); outline:none; }
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const Img = styled.img`
  width:100%;
  height:auto;
  display:block;
  border-radius: ${({ theme }) => theme.spacing.radius};
  object-fit:cover;
  /* use opacity and absolute when hidden so onLoad will still fire */
  &.hidden {
    opacity:0;
    position:absolute;
    inset:0;
  }
  &.visible {
    opacity:1;
    position:relative;
    transition: opacity ${({ theme }) => theme.transition} ease;
  }
`;

const Tag = styled.span`
  position:absolute; top:8px; left:8px;
  padding:4px 8px; border-radius:6px;
  font-weight:700; font-size:0.75rem;
  color:white;
  background: ${p => p.type === 'novo' ? p.theme.colors.tagNew : p.theme.colors.tagPromo};
`;

const Title = styled.h3`
  font-size:1rem; line-height:1.2; margin:0;
  max-height:2.4em; overflow:hidden; text-overflow:ellipsis;
`;

const Row = styled.div`
  display:flex; align-items:center; justify-content:space-between;
`;

export default function ProductCard({ product }) {
    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        // ensure onLoad fired (image loads while possibly absolute) then delay
        setTimeout(() => setLoading(false), 200);
    };

    const ratingInt = Math.round(product.rating);
    const isNew = product.tag.toLowerCase() === "novo";

    return (
        <Card tabIndex="0" aria-labelledby={`title-${product.id}`}>
            <ImgWrapper>
                {loading && <Skeleton />}
                <Tag type={isNew ? "novo" : "promo"}>{product.tag}</Tag>
                <Img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    onLoad={handleLoad}
                    className={loading ? "hidden" : "visible"}
                />
            </ImgWrapper>

            <Title id={`title-${product.id}`} title={product.title}>{product.title}</Title>

            <Row>
                <div style={{ fontWeight: 700 }}>${product.price.toFixed(2)}</div>
                <div aria-label={`Avaliação ${product.rating} de 5`} title={`${product.rating} de 5`} style={{ color: '#f59e0b' }}>
                    {'★'.repeat(ratingInt)}
                </div>
            </Row>

            <div style={{ display: 'flex', gap: '8px' }}>
                <Button variant="solid" aria-label={`Adicionar ${product.title}`}>Adicionar</Button>
                <Button variant="outline" aria-label={`Mais sobre ${product.title}`}>Opções</Button>
                <Button variant="ghost" aria-label={`Favoritar ${product.title}`}>☆</Button>
            </div>
        </Card>
    );
}
