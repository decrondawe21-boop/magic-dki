import {
  Heading,
  Text,
  Button,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
  Card,
  Badge,
  Icon,
} from "@once-ui-system/core";
import { pricing, baseURL, person, about } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: pricing.title,
    description: pricing.description,
    baseURL: baseURL,
    path: pricing.path,
    image: pricing.image,
  });
}

export default function Pricing() {
  return (
    <Column maxWidth="xl" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={pricing.path}
        title={pricing.title}
        description={pricing.description}
        image={pricing.image ? `${baseURL}${pricing.image}` : `${baseURL}/api/og/generate?title=${encodeURIComponent(pricing.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: person.avatar ? `${baseURL}${person.avatar}` : undefined,
        }}
      />
      
      {/* Header Section */}
      <Column fillWidth horizontal="center" gap="m" paddingBottom="40">
        <Column maxWidth="m" horizontal="center" align="center">
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {pricing.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l">
              {pricing.subline}
            </Text>
          </RevealFx>
        </Column>
      </Column>

      {/* Trial Information */}
      {pricing.trial.display && (
        <RevealFx translateY="8" delay={0.3} fillWidth horizontal="center" paddingBottom="24">
          <Badge
            background="accent-alpha-weak"
            paddingX="16"
            paddingY="8"
            onBackground="accent-strong"
            textVariant="label-default-m"
          >
            <Row gap="8" vertical="center">
              <Icon name="checkCircle" size="s" />
              <Text variant="label-default-m">{pricing.trial.description}</Text>
            </Row>
          </Badge>
        </RevealFx>
      )}

      {/* Pricing Tiers */}
      <RevealFx translateY="12" delay={0.4}>
        <Row
          fillWidth
          gap="24"
          wrap
          horizontal="center"
          l={{ gap: "32" }}
          m={{ direction: "column" }}
        >
          {pricing.tiers.map((tier, index) => (
            <Column
              key={tier.name}
              flex={1}
              minWidth="280"
              maxWidth="360"
              gap="24"
              padding="32"
              radius="l"
              border="neutral-alpha-medium"
              background={tier.highlighted ? "accent-alpha-weak" : "surface"}
              shadow="l"
              style={{
                position: "relative",
                transform: tier.highlighted ? "scale(1.05)" : "scale(1)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              {tier.highlighted && (
                <Badge
                  background="accent-strong"
                  paddingX="12"
                  paddingY="4"
                  onBackground="accent-on-background"
                  textVariant="label-default-s"
                  style={{
                    position: "absolute",
                    top: "-12px",
                    right: "24px",
                  }}
                >
                  Doporučeno
                </Badge>
              )}
              
              <Column gap="16">
                <Heading variant="heading-strong-l">{tier.name}</Heading>
                <Column gap="4">
                  <Row gap="8" vertical="end">
                    <Heading variant="display-strong-s">{tier.price}</Heading>
                  </Row>
                  <Text
                    variant="body-default-s"
                    onBackground="neutral-weak"
                  >
                    {tier.period}
                  </Text>
                </Column>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  {tier.description}
                </Text>
              </Column>

              <Column gap="12" paddingTop="8">
                {tier.features.map((feature, idx) => (
                  <Row key={idx} gap="12" vertical="center">
                    <Icon
                      name="check"
                      size="s"
                      onBackground={tier.highlighted ? "accent-strong" : "brand-strong"}
                    />
                    <Text variant="body-default-s">{feature}</Text>
                  </Row>
                ))}
              </Column>

              <Button
                fillWidth
                href={tier.ctaLink}
                variant={tier.highlighted ? "primary" : "secondary"}
                size="l"
                weight="default"
              >
                {tier.cta}
              </Button>
            </Column>
          ))}
        </Row>
      </RevealFx>

      {/* Additional Information */}
      <RevealFx translateY="12" delay={0.6}>
        <Column fillWidth maxWidth="m" gap="24" paddingTop="40" horizontal="center" align="center">
          <Column gap="12" horizontal="center" align="center">
            <Heading variant="heading-strong-l">Máte dotazy?</Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              Kontaktujte nás a rádi vám pomůžeme vybrat nejvhodnější řešení pro váš podnik.
            </Text>
          </Column>
          <Button
            id="contact"
            href={`mailto:${person.email}`}
            variant="secondary"
            size="l"
            weight="default"
            arrowIcon
          >
            Kontaktovat nás
          </Button>
        </Column>
      </RevealFx>
    </Column>
  );
}
